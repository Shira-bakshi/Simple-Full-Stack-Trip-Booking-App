export class bookingPlace
{
    constructor(public BookingCode:number=0, public UserCode:Number=0,public BookingDate?:Date, public TripCode:number=0, public NumberOfPlaces:number=0,public FullName:string="",public TripDestination:string="",public Date?:Date)
    {}
}