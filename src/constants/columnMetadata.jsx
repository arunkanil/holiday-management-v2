import { filterParams } from '../components/Utils/DateFilter';

export const DepartmentMasterColumnDefs = [
  {
    headerName: "Sl.No",
    valueGetter: "node.rowIndex + 1",
    editable: false,
    resizable: true,
    width: 70,
  },
  // {
  //   headerName: 'Id',
  //   field: 'id',
  //   sortable: true,
  //   editable: false,
  //   resizable: true,
  //   width: 70,
  // },
  {
    headerName: 'Department',
    field: 'name',
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    sortable: true,
    editable: false,
    resizable: true,
    // width: 350,
  },
  {
    headerName: 'Description',
    field: 'description',
    sortable: true,
    editable: false,
    resizable: true,
    // width: 350,
  },
  {
    headerName: 'Actions',
    field: 'actions',
    sortable: false,
    editable: false,
    resizable: true,
    width: 70,
    cellRenderer: 'statusRenderer',
  },
];
export const DesignationMasterColumnDefs = [
  {
    headerName: "Sl.No",
    valueGetter: "node.rowIndex + 1",
    editable: false,
    resizable: true,
    width: 70,
  },
  // {
  //   headerName: 'Id',
  //   field: 'id',
  //   sortable: true,
  //   editable: false,
  //   resizable: true,
  //   width: 70,
  // },
  {
    headerName: 'Designation',
    field: 'name',
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    sortable: true,
    editable: false,
    resizable: true,
    // width: 350,
  },
  {
    headerName: 'Description',
    field: 'description',
    sortable: true,
    editable: false,
    resizable: true,
    // width: 350,
  },
  {
    headerName: 'Actions',
    field: 'actions',
    sortable: false,
    editable: false,
    resizable: true,
    width: 70,
    cellRenderer: 'statusRenderer',
  },
];
export const CountryMasterColumnDefs = [
  {
    headerName: "Sl.No",
    valueGetter: "node.rowIndex + 1",
    editable: false,
    resizable: true,
    width: 70,
  },
  // {
  //   headerName: 'Id',
  //   field: 'id',
  //   sortable: true,
  //   editable: false,
  //   resizable: true,
  //   width: 70,
  // },
  {
    headerName: 'Country',
    field: 'name',
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    sortable: true,
    editable: false,
    resizable: true,
    // width: 100,
  },
  {
    headerName: 'Code',
    field: 'code',
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    sortable: true,
    editable: false,
    resizable: true,
    // width: 350,
  },
  {
    headerName: 'Weekends',
    field: 'weekend1',
    sortable: true,
    editable: false,
    resizable: true,
    cellRenderer: 'weekendRenderer',
  },
  {
    headerName: 'Actions',
    field: 'actions',
    sortable: false,
    editable: false,
    resizable: true,
    width: 70,
    cellRenderer: 'statusRenderer',
  },
];
export const LevelMasterColumnDefs = [
  
  {
    headerName: "Sl.No",
    valueGetter: "node.rowIndex + 1",
    editable: false,
    resizable: true,
    width: 70,
  },
  // {
  //   headerName: 'Sl No.',
  //   field: 'id',
  //   sortable: true,
  //   editable: false,
  //   resizable: true,
  //   width: 70,
  // },
  {
    headerName: 'Unique ID',
    field: 'unique_id',
    sortable: true,
    editable: false,
    resizable: true,
    // width: 100,
  },
  {
    headerName: 'Level',
    field: 'level',
    sortable: true,
    editable: false,
    resizable: true,
    // width: 350,
  },
  {
    headerName: 'Actions',
    field: 'actions',
    sortable: false,
    editable: false,
    resizable: true,
    width: 70,
    cellRenderer: 'statusRenderer',
  },
];
export const LeaveTypeMasterColumnDefs = [
  {
    headerName: "Sl.No",
    valueGetter: "node.rowIndex + 1",
    editable: false,
    resizable: true,
    width: 70,
  },
  // {
  //   headerName: 'Id',
  //   field: 'id',
  //   sortable: true,
  //   editable: false,
  //   resizable: true,
  //   width: 70,
  // },
  {
    headerName: 'Leave Type',
    field: 'name',
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    sortable: true,
    editable: false,
    resizable: true,
    // width: 350,
  },
  {
    headerName: 'Description',
    field: 'description',
    sortable: true,
    editable: false,
    resizable: true,
    // width: 100,
  },
  {
    headerName: 'Actions',
    field: 'actions',
    sortable: false,
    editable: false,
    resizable: true,
    width: 70,
    cellRenderer: 'statusRenderer',
  },
];
export const PublicHolidaysMasterColumnDefs = [
  {
    headerName: "Sl.No",
    valueGetter: "node.rowIndex + 1",
    editable: false,
    resizable: true,
    width: 70,
  },
  // {
  //   headerName: 'Id',
  //   field: 'id',
  //   sortable: true,
  //   editable: false,
  //   resizable: true,
  //   width: 70,
  // },
  {
    headerName: 'Country',
    field: 'countryName',
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    sortable: true,
    editable: false,
    resizable: true,
    // width: 350,
  },
  {
    headerName: 'Name',
    field: 'name',
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    editable: false,
    resizable: true,
    // width: 350,
  },
  {
    headerName: 'Description',
    field: 'description',
    sortable: true,
    editable: false,
    resizable: true,
    // width: 100,
  },
  {
    headerName: 'Date',
    field: 'date',
    filter: 'agDateColumnFilter',
    filterParams: filterParams,
    sortable: true,
    editable: false,
    resizable: true,
    width: 100,
    cellRenderer: 'dateRenderer',
  },
  {
    headerName: 'Year',
    field: 'year',
    filter: 'agNumberColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    sortable: true,
    editable: false,
    resizable: true,
    width: 100,
  },
  {
    headerName: 'Actions',
    field: 'actions',
    sortable: false,
    editable: false,
    resizable: true,
    width: 70,
    cellRenderer: 'statusRenderer',
  },
];
export const LeaveEntitlementMasterColumnDefs = [
  {
    headerName: "Sl.No",
    valueGetter: "node.rowIndex + 1",
    editable: false,
    resizable: true,
    width: 70,
  },
  // {
  //   headerName: 'Id',
  //   field: 'id',
  //   sortable: true,
  //   editable: false,
  //   resizable: true,
  //   width: 70,
  // },
  {
    headerName: 'Country',
    field: 'contryName',
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    sortable: true,
    editable: false,
    resizable: true,
    // width: 350,
  },
  {
    headerName: 'Leave Type',
    field: 'leaveTypeName',
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    editable: false,
    resizable: true,
    // width: 350,
  },
  {
    headerName: 'Leave Count',
    field: 'leaveCount',
    sortable: true,
    filter: 'agNumberColumnFilter',
    filterParams: {
      buttons: ['reset'],
    },
    editable: false,
    resizable: true,
    // width: 100,
  },
  {
    headerName: 'Actions',
    field: 'actions',
    sortable: false,
    editable: false,
    resizable: true,
    width: 70,
    cellRenderer: 'statusRenderer',
  },
];
export const EmployeeManagementColumnDefs = [
  {
    headerName: "Sl.No",
    valueGetter: "node.rowIndex + 1",
    editable: false,
    resizable: true,
    width: 70,
  },
  {
    headerName: 'Emp.ID',
    field: 'employeeId',
    sortable: true,
    editable: false,
    resizable: true,
    width: 70,
    cellRenderer: 'idRenderer',
  },
  {
    headerName: 'Employee Name',
    field: 'firstName',
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    sortable: true,
    editable: false,
    resizable: true,
    // width: 350,
  },
  {
    headerName: 'Designation',
    field: 'designation',
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    editable: false,
    resizable: true,
  },
  {
    headerName: 'Department',
    field: 'department',
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    editable: false,
    resizable: true,
  },
  {
    headerName: 'Country',
    field: 'country',
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    editable: false,
    resizable: true,
  },
  {
    headerName: 'Approver',
    field: 'reportsToName',
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    editable: false,
    resizable: true,
  },
  {
    headerName: 'Actions',
    field: 'actions',
    sortable: false,
    editable: false,
    resizable: true,
    width: 70,
    cellRenderer: 'statusRenderer',
  },
];
export const LeaveReportColumnDefs = [
  {
    headerName: "Sl.No",
    valueGetter: "node.rowIndex + 1",
    editable: false,
    resizable: true,
    width: 50,
  },
  {
    headerName: 'Emp.ID',
    field: 'employeeId',
    sortable: true,
    editable: false,
    resizable: true,
    width: 50,
    cellRenderer: 'idRenderer',
  },
  {
    headerName: 'Country',
    field: 'countryName',
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    sortable: true,
    editable: false,
    resizable: true,
    width: 130,
  },
  {
    headerName: 'Employee Name',
    field: 'employeeName',
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    width:100,
    sortable: true,
    editable: false,
    resizable: true,
    // width: 350,
  },
  {
    headerName: 'From',
    field: 'fromDate',
    filter: 'agDateColumnFilter',
    filterParams: filterParams,
    sortable: true,
    editable: false,
    resizable: true,
    width: 90,
    cellRenderer: 'dateRenderer',
  },
  {
    headerName: 'To',
    field: 'toDate',
    filter: 'agDateColumnFilter',
    filterParams: filterParams,
    sortable: true,
    editable: false,
    resizable: true,
    width: 90,
    cellRenderer: 'dateRenderer',
  },
  {
    headerName: 'Status',
    field: 'statusText',
    sortable: true,
    width:50,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    editable: false,
    resizable: true,
  },
];

export const LeaveApprovalColumnDefs = [
  ...LeaveReportColumnDefs,
  {
    headerName: 'Ageing',
    field: 'creationTime',
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    sortable: true,
    editable: false,
    resizable: true,
    width: 100,
    cellRenderer: 'AgeingRenderer',
  },
  {
    headerName: 'Actions',
    field: 'actions',
    sortable: false,
    editable: false,
    resizable: true,
    suppressSelection: true,
    width: 70,
    cellRenderer: 'statusRenderer',
  },
];
