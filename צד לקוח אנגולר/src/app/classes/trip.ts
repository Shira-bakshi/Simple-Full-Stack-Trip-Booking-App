export class trip
{
    constructor(public TripCode:Number=0, public TripDestination:string="", public TypeCode:number=0, public Date?:Date, public TripDurationHours:number=0,
         public NumberOfAvailablePlaces:number=0, public Price:number=0, public Photo:String="",public TypeName:string="", public FirstAidCertificate:boolean=false)
    {}
}