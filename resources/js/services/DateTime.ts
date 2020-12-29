export default class DateTime {
  private dateTime: Date;
  
  private months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  
  constructor(dateTimeString: string) {
    this.dateTime = new Date(dateTimeString);
  }
  
  public getDay(): number {
    return this.dateTime.getDate();
  }
  
  public getFullMonth(): string {
    const monthIndex = this.dateTime.getMonth();
    
    return this.months[monthIndex] || '';
  }
  
  public getFullYear(): number {
    return this.dateTime.getFullYear();
  }
  
  public getHours(): number {
    return this.dateTime.getHours();
  }
  
  public getMinutes(): number {
    return this.dateTime.getMinutes();
  }
  
  public getSeconds(): number {
    return this.dateTime.getSeconds();
  }
  
  public getMeridiem(): string {
    const hours = this.getHours();

    return hours >= 12 ? 'pm' : 'am';
  }
}
