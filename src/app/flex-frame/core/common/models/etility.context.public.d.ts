declare module ZIPK_ETILITY_PUBLIC_SRV {

  export interface LocationAddress {
    City: string;
    Country: string;
    Housenumber: string;
    PostalCode: string;
    SupplyPossible: string;
    Street: string;
  }

  export interface LocationCity {
    CityID: string;
    PostalCode: string;
    City: string;
    Country: string;
  }

  export interface CorrespVariant {
    ID: string;
    Description: string;
  }

  export interface BPKind {
    ID: string;
    Description: string;
  }

  export interface GetCustomizing {
    Key: string;
    Value: string;
    Datatype: string;
    DatatypeName: string;
    DatetypeDescription: string;
  }

  export interface EEHousehold {
    Email: string;
    FlatArea: number;
    FlatOccupancy: number;
    FlatTypeId: string;
    Heating1Id: string;
    Heating2Id: string;
    WaterHeatingId: string;
    ElectricDevicesId: string;
  }

  export interface EEHeating2Type {
    Id: string;
    Description: string;
  }

  export interface EEHeating1Type {
    Id: string;
    Description: string;
  }

  export interface EEFlatType {
    Id: string;
    Description: string;
  }

  export interface EEElectricType {
    Id: string;
    Description: string;
  }

  export interface EEWaterHType {
    Id: string;
    Description: string;
  }

  export interface Bank {
    CountryID: string;
    BankName: string;
    City: string;
    SwiftCode: string;
    BankID: string;
  }

  export interface AccountTitle {
    AccountTypeID: string;
    TitleID: string;
    Description: string;
  }

  export interface PaymentMethod {
    PseudoID: string;
    CountryID: string;
    PaymentMethodID: string;
    Description: string;
  }

  export interface Country {
    CountryID: string;
    Name: string;
    PhonenumberPrefix: string;
  }

}
