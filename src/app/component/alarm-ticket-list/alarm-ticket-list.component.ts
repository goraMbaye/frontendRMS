import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { TicketService } from '../../service/ticket.service';
import { ROLE, TICKET_TYPE, TiCKET_STATE } from '../../shared/app-constants';
import { formatDate } from '../../shared/date-formater';
import { NzMessageService } from 'ng-zorro-antd/message';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-alarm-ticket-list',
  templateUrl: './alarm-ticket-list.component.html',
  styleUrl: './alarm-ticket-list.component.css'
})
export class AlarmTicketListComponent implements OnInit {

	TICKETTYPE = TICKET_TYPE;
  selectedStatus: any;
  date: Date | null = null;
  ticketStatus: { label: string, value: string }[] = [
    { label: 'ASSIGNED', value: TiCKET_STATE.ASSIGNED },
    { label: 'WORK IN PROGRESS', value: TiCKET_STATE.WORKINPROGRESS },
    { label: 'WAIT FOR CLOSURE', value: TiCKET_STATE.WAITFORCLOSURE },
    { label: 'CLOSED', value: TiCKET_STATE.CLOSED },
    { label: 'CANCEL', value: TiCKET_STATE.CANCEL }
];
  type!: string;
  loading: boolean = true;
  total: number = 0;
  pageSize = 10;
  pageIndex = 1;
  filterParams: any = {
    site: null,
    status: null,
    date: null

  }

  priorities: any[] = [{
    key: '1',
    label: 'CRITICAL'
  },
  {
    key: '2',
    label: 'HIGH'
  },
  {
    key: '3',
    label: 'MODERATE'
  },
  {
    key: '4',
    label: 'LOW'
  },
  ]

  tickets: any[] = [];
  alarmName: any;
  siteId: any;
  currentUser: any = null;
  ROLE = ROLE;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private ticketService: TicketService,
    private loginService: LoginService,
    private message: NzMessageService) {

  }

  ngOnInit(): void {
   
    this.currentUser = this.loginService.currentUser;
   this.route.queryParamMap.subscribe(params => {
    this.type = params.get('type')!;
    this.pageIndex = 1; // Reset or preserve the page index based on logic
    this.pageSize = 10; // Set the page size
    this.date = null;
    this.siteId = null;
    this.selectedStatus = null;
    this.fetchTicket(this.pageIndex, this.pageSize, this.type);
   })

  //  this.router.navigate([], {
  //   relativeTo: this.route,
  //   queryParams: {
  //     pageIndex: this.pageIndex,
  //     pageSize: this.pageSize,
  //     type: this.type
  //   },
  //   queryParamsHandling: 'merge' // preserve existing query params
  // });


  }


  getPriority(value: string): string {
    return this.priorities.find(v => v.key === value)?.label??'N/A';
  }

  fetchTicket(page: number=1, limit:number=10, type: string): void {
    this.loading = true;
    this.ticketService.fetchTickets(page,limit, type)
      .subscribe(
        
        (response: any) => {
          this.tickets = response.data;
          this.total = response.count;  // Update total count for pagination
          this.pageSize = limit;        // Ensure pageSize is correctly set
          this.pageIndex = page;        // Update pageIndex based on the current page
          this.loading = false;
        },
        error =>{ 
          console.error('There was an error fetching the site options!', error);
          this.loading = false;
        }
      );
  }

  navigateToNewTicket() {
    this.router.navigate(['admin/alarms/tickets'], { queryParams: { status: TiCKET_STATE.OPEN, type: this.type } });
  }

  navigateToTicketDetails(id: string) {
    this.router.navigate(['admin/alarms/tickets'], { queryParams: { id: id, type: this.type } });
  }

  onQueryParamsChange(params: NzTableQueryParams): void {
    console.log(params);
    
    const { pageSize, pageIndex, sort, filter } = params;
    this.pageSize = pageSize;
    this.pageIndex= pageIndex;
   // const currentSort = sort.find(item => item.value !== null);
   // const sortField = (currentSort && currentSort.key) || null;
   // const sortOrder = (currentSort && currentSort.value) || null;
    
    this.fetchTicket(pageIndex,pageSize, this.type);
   // this.loadDataFromServer(pageIndex, pageSize, sortField, sortOrder, filter);
  }


  onStatusSearch(value: any) {
    console.log(value);
    
    this.filterParams.status = value;

    this.applayFilter();
    
    }
    applayFilter() {
     // console.log(this.filterParams);
      this.loading = true;
     this.ticketService.filterTickets(this.pageIndex, this.pageSize, this.type,this.filterParams )
     .subscribe(
      res => {
        //console.log(res);

        this.tickets = res?.data;
        this.loading = false;
       this.message.success('Data loaded successfuly !');
        
      },
      error => {
        console.log(error);
        this.loading = false;
        this.message.error('Error loading data !');

        
      }
     )
    }
    reloadData() {
      this.filterParams.site = null;
      this.filterParams.date = null;
      this.filterParams.status = null;
      this.selectedStatus = null;
      this.date = null;
      this.siteId = null;
    this.fetchTicket(this.pageIndex, this.pageSize, this.type);
    }

    onSiteSearch(event: any) {
   // console.log(event?.value);
    this.filterParams.site = event?.target?.value;

      
      }

      onDateSearch(date: any) {
        console.log(date);
          this.filterParams.date = date !== null ? formatDate(date): null;
          this.applayFilter();
          }


          onFileSelected(event: any) {
    
            const fileInput =  event.target;
            var selectedFile = fileInput.files[0];
            const uploadData = new FormData();
            uploadData.append('file', selectedFile, selectedFile.name);
        
        
            this.ticketService.uploadSiteMaintenance(uploadData)
            .subscribe(
              (res) => {
                console.log(res);
                this.message.success('Maintenance file uploaded succesfuly !')
                
              },
              (error) => {
                this.message.success('Error during uploading file');
                console.log(error);
                

              }
            )
            console.log(selectedFile);
            
          }
        

}
