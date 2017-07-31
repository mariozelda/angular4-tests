declare namespace ZIPK_ETILITY_CORE {

  export interface Account {
    AccountID: string;
    AccountTitleID: string;
    AccountTypeID: string;
    Birthdate: Date;
    CorrespondenceLanguage: string;
    FirstName: string;
    MiddleName: string;
    LastName: string;
    SecondName: string;
    FullName: string;
    Sex: string;
    Name1: string;
    Name2: string;
    Name3: string;
    Name4: string;
    GroupName1: string;
    GroupName2: string;
    IsRealEstateManager: boolean;
    AccountAddressSet: ZIPK_ETILITY_CORE.AccountAddress[];
    AccountContactSet: ZIPK_ETILITY_CORE.AccountContact[];
    EmailAdrSet: ZIPK_ETILITY_CORE.EmailAdr[];
    FaxSet: ZIPK_ETILITY_CORE.Fax[];
    MobileSet: ZIPK_ETILITY_CORE.Mobile[];
    PhoneSet: ZIPK_ETILITY_CORE.Phone[];
    AccountTitleSet: ZIPK_ETILITY_CORE.AccountTitle[];
    BankAccountSet: ZIPK_ETILITY_CORE.BankAccount[];
    ContractAccountSet: ZIPK_ETILITY_CORE.ContractAccount[];
    StandardAccountAddressSet: ZIPK_ETILITY_CORE.AccountAddress;
  }

  export interface AccountAddress {
    AddressInfo: ZIPK_ETILITY_CORE.AddressInfo;
    AccountID: string;
    AddressID: string;
    FromDate: Date;
    ToDate: Date;
  }

  export interface AccountContact {
    AccountContactID: string;
    AccountID: string;
    ContactActionID: string;
    ContactinterfaceID: string;
    ContactDate: Date;
    ContactTypeID: string;
    Note: string;
    FlagOnlyOneADay: boolean;
    ContactActionSet: ZIPK_ETILITY_CORE.ContactAction;
  }

  export interface AccountTitle {
    TitleID: string;
    AccountTypeID: string;
    Description: string;
  }

  export interface BankAccount {
    AccountID: string;
    BankAccountID: string;
    AccountHolder: string;
    BankAccountName: string;
    BankAccountNo: string;
    BankID: string;
    BankName: string;
    BankSwift: string;
    CountryID: string;
    IBAN: string;
    BankSet: ZIPK_ETILITY_CORE.Bank[];
  }

  export interface ContactAction {
    ID: string;
    ContactinterfaceID: string;
    Description: string;
  }

  export interface Contract {
    ContractID: string;
    Service: string;
    ContractAccountID: string;
    InstallationId: string;
    ContractEndDate: Date;
    ContractStartDate: Date;
    Description: string;
    DivisionID: string;
    PremiseID: string;
    DeviceSet: ZIPK_ETILITY_CORE.Device[];
    PremiseSet: ZIPK_ETILITY_CORE.Premise[];
    ContractAccount: ZIPK_ETILITY_CORE.ContractAccount;
  }

  export interface ContractAccount {
    ContractAccountID: string;
    AccountAddressID: string;
    AccountID: string;
    BillToAccountAddressID: string;
    BillToAccountID: string;
    BudgetBillingProcedure: string;
    CountryID: string;
    CorrespondenceVariant: string;
    Description: string;
    IncomingPaymentBankAccountID: string;
    IncomingPaymentMethodID: string;
    IncomingPaymentPaymentCardID: string;
    OutgoingPaymentBankAccountID: string;
    OutgoingPaymentMethodID: string;
    OutgoingPaymentPaymentCardID: string;
    FlagInactive: string;
    Consolidator: string;
    AccountAddressSet: ZIPK_ETILITY_CORE.AccountAddress;
    BillToAccountSet: ZIPK_ETILITY_CORE.Account;
    BillToAccountAddressSet: ZIPK_ETILITY_CORE.AccountAddress;
    ContractSet: ZIPK_ETILITY_CORE.Contract[];
    IncomingBankAccountSet: ZIPK_ETILITY_CORE.BankAccount;
    OutgoingBankAccount: ZIPK_ETILITY_CORE.BankAccount;
    CorrespVariantSet: ZIPK_ETILITY_CORE.CorrespVariant[];
    InvoiceSet: ZIPK_ETILITY_CORE.Invoice[];
    CountrySet: ZIPK_ETILITY_CORE.Country[];
  }

  export interface Country {
    CountryID: string;
    PhonenumberPrefix: string;
    Name: string;
  }

  export interface Device {

    AddressInfo: ZIPK_ETILITY_CORE.AddressInfo;
    DeviceID: string;
    InstallationID: string;
    DeviceDescription: string;
    ContractID: string;
    MeterNumber: string;
    DeviceModelID: string;
    Manufacturer: string;
    RateType: string;
    ProofOfOriginRateType: boolean;
    ProofOfOriginInProcess: boolean;
    HasActiveProofOfOrigin: boolean;
    PremiseID: string;
    ContractSet: ZIPK_ETILITY_CORE.Contract;
    MeterReadingResultSet: ZIPK_ETILITY_CORE.MeterReadingResult[];
    RegisterToReadSet: ZIPK_ETILITY_CORE.RegisterToRead[];
  }

  export interface EmailAdr {
    AccountID: string;
    SequenceNo: string;
    Email: string;
    HomeFlag: boolean;
    Remark: string;
    StandardFlag: boolean;
  }

  export interface Fax {
    AccountID: string;
    SequenceNo: string;
    CompleteFaxNo: string;
    FaxNo: string;
    Extension: string;
    CountryID: string;
    HomeFlag: boolean;
    StandardFlag: boolean;
  }

  export interface InvoicePDF {
    InvoiceID: string;
    MediaResource: Uint8Array;
    MimeType: string;
  }

  export interface MeterReadingResult {
    MeterReadingResultID: string;
    RegisterID: string;
    PremiseID: string;
    ReadingDate: Date;
    ReadingDateBegin: Date;
    RegisterCode: string;
    DeviceModelID: string;
    EquipmentID: string;
    MeterNumber: string;
    MeterReadingReasonID: string;
    RateType: string;
    RateCategory: string;
    ReadingResult: string;
    RegisterFactor: string;
    MeterReadingUnit: string;
    DeliveryAmount: string;
    FlagEnergyReturn: boolean;
    FlagPowerMeasurement: boolean;
    DeviceSet: ZIPK_ETILITY_CORE.Device;
    DependentMRResultSet: ZIPK_ETILITY_CORE.MeterReadingResult[];
  }

  export interface Mobile {
    AccountID: string;
    SequenceNo: string;
    CompletePhoneNo: string;
    CountryID: string;
    DefaultFlag: boolean;
    Extension: string;
    HomeFlag: boolean;
    PhoneNo: string;
    StandardFlag: boolean;
  }

  export interface PaymentMethod {
    PseudoID: string;
    CountryID: string;
    PaymentMethodID: string;
    Description: string;
    FlagPrevious: string;
    FlagUsed: string;
    FinancialInstitute: string;
    Regiogroup: string;
    AdditionalInformation: string;
  }

  export interface Phone {
    AccountID: string;
    SequenceNo: string;
    CompletePhoneNo: string;
    CountryID: string;
    Extension: string;
    HomeFlag: boolean;
    PhoneNo: string;
    StandardFlag: boolean;
  }

  export interface Premise {
    AddressInfo: ZIPK_ETILITY_CORE.AddressInfo;
    PremiseID: string;
    ConnObjID: string;
    IsActive: boolean;
    IsValidForHistory: boolean;
    IsValidForMove: boolean;
    IsValidForProduct: boolean;
    MeterNumber: string;
    ObjectDescription: string;
    PremiseTypeID: string;
    RegioGroup: string;
    SupplyPossible: string;
    UsingForEE: boolean;
    AnnexPremise: boolean;
    ContractSet: ZIPK_ETILITY_CORE.Contract[];
    ProofOfOrigin: ZIPK_ETILITY_CORE.ProofOfOrigin;
    DeviceSet: ZIPK_ETILITY_CORE.Device[];
  }

  export interface PremiseType {
    PremiseTypeID: string;
    Description: string;
  }

  export interface RegisterToRead {
    AddressInfo: ZIPK_ETILITY_CORE.AddressInfo;
    EquipmentID: string;
    RegisterID: string;
    DecimalPlaces: string;
    DeviceModelID: string;
    ExtCyclePEnd: Date;
    ExtCyclePStart: Date;
    ExtHasOpenCycleP: boolean;
    IntegerPlaces: string;
    Manufacturer: string;
    MeterNumber: string;
    MeterReadingUnit: string;
    NoMeterReadingOrderFlag: boolean;
    PremiseID: string;
    PreviousMeterReadingDate: Date;
    PreviousMeterReadingDateTime: string;
    PreviousMeterReadingResult: string;
    PreviousMeterReadingTimestamp: Date;
    RateType: string;
    RegisterCode: string;
    RegisterTypeID: string;
    RegisterTypeText: string;
    RegisterFactor: string;
    FlagEnergyReturn: boolean;
    FlagPowerMeasurement: boolean;
    DeviceSet: ZIPK_ETILITY_CORE.Device;
  }

  export interface GetCustomizing {
    Key: string;
    Value: string;
    Datatype: string;
    DomainName: string;
    Description: string;
  }

  export interface CorrespVariant {
    ID: string;
    Description: string;
  }

  export interface ConsumptionYear {
    ReceiptId: string;
    PremiseId: string;
    DateFrom: Date;
    DateTo: Date;
    AmountLowRate: string;
    AmountHighRate: string;
    AmountSingleRate: string;
    AmountPowerMeasurement: string;
    Total: string;
    TarifText1: string;
    TarifText2: string;
    NumDays: string;
    BilledAmount: string;
    MeterReadingReasonId: string;
    PowerMeasurement: boolean;
    RateType: string;
    RegisterFactor: string;
    ConsumptionYearExportSet: ZIPK_ETILITY_CORE.ConsumptionYearExport[];
  }

  export interface UserAgreement {
    AgreementOK: boolean;
    PartnerID: string;
  }

  export interface ConsumptionYearExport {
    PremiseID: string;
    MimeType: Uint8Array;
    MediaResource: string;
  }

  export interface CampaignHandling {
    CampaignID: string;
    CampaignDescription: string;
    PartnerID: string;
    Choice: string;
    ChoiceDate: Date;
  }

  export interface InstallmentPlan {
    InstallmentPlanID: string;
    InstallmentNumber: string;
    InvoiceID: string;
    DueDate: Date;
    Amount: string;
    FlagPaid: boolean;
  }

  export interface InstallmentPlanType {
    InstallmentPlanTypeID: string;
    InstallmentPlanTypeDescription: string;
    NumbersOfInstallment: string;
    InstallmentInterval: string;
    IntervalUnitText: string;
  }

  export interface RealEstateManagement {
    AdressInfo: ZIPK_ETILITY_CORE.AddressInfo;
    PremiseID: string;
    ConnObjID: string;
    ContractID: string;
    FromDate: Date;
    ToDate: Date;
    TenantID: string;
    TenantType: string;
    TenantTitleID: string;
    TenantFirstName: string;
    TenantMiddleName: string;
    TenantLastName: string;
    TenantSecondName: string;
    TenantFullName: string;
    TenantName1: string;
    TenantName2: string;
    TenantName3: string;
    TenantName4: string;
    TenantGroupName1: string;
    TenantGroupName2: string;
    PremiseIsValidForHistory: boolean;
    PremiseIsValidForMove: boolean;
    PremiseIsValidForProduct: boolean;
    PremiseIsActive: boolean;
  }

  export interface MeterReadingExport {
    PremiseID: string;
    MediaResource: Uint8Array;
    MimeType: string;
  }

  export interface Bank {
    CountryID: string;
    BankName: string;
    City: string;
    SwiftCode: string;
    BankID: string;
    Country: ZIPK_ETILITY_CORE.Country;
  }

  export interface PremiseLocation {
    PremiseID: string;
    PremiseTypeID: string;
    ConnObjID: string;
    Regiogroup: string;
    MeterNumber: string;
    ObjectDescription: string;
    SupplyPossible: boolean;
    AnnexPremise: boolean;
    Building: string;
    City: string;
    CountryID: string;
    District: string;
    Floor: string;
    HouseNo: string;
    LanguageID: string;
    PostalCode: string;
    Region: string;
    RoomNo: string;
    AddressLabel: string;
    Street: string;
    TaxJurisdictionCode: string;
    TimeZone: string;
    FlatLabel: string;
  }

  export interface ConnectionObject {
    AddressID: string;
    ConnObjID: string;
    Country: string;
    PostalCode: string;
    City: string;
    SupplyPossible: string;
    Street: string;
    Housenumber: string;
    PremiseSet: ZIPK_ETILITY_CORE.Premise[];
    PremiseLocationSet: ZIPK_ETILITY_CORE.PremiseLocation[];
  }

  export interface Move {
    PrevTenant: ZIPK_ETILITY_CORE.MoveAddressBd;
    NextTenant: ZIPK_ETILITY_CORE.MoveAddressBd;
    NewAddress: ZIPK_ETILITY_CORE.MoveAddressBd;
    BillingAddress: ZIPK_ETILITY_CORE.MoveAddressBd;
    PaymentMethod: ZIPK_ETILITY_CORE.MoveBankBd;
    PrDocNr: string;
    MoveType: string;
    MoveInDate: Date;
    MoveOutDate: Date;
    PremiseIn: string;
    PremiseOut: string;
    PrDocVariant: string;
    Notefield: string;
  }

  export interface Invoice {
    InvoiceID: string;
    InvoiceNumber: string;
    ContractAccountID: string;
    AccountID: string;
    AmountTotal: string;
    AmountPaid: string;
    AmountOpen: string;
    Currency: string;
    DueDate: Date;
    InvoiceDate: Date;
    InvoiceDescription: string;
    InvoiceStatusID: string;
    Premise: string;
    Address: string;
    FlatLabel: string;
    MeterNumber: string;
    Printlock: string;
    PrintDate: Date;
    PayrollPeriodFromDate: Date;
    PayrollPeriodToDate: Date;
    DunningLevel: string;
    Collectivbill: string;
    BillingTransaction: string;
    DocumentDate: Date;
    ReferenceNumber: string;
    CodeLine: string;
    FlagInstPlanPossible: boolean;
    FlagDeferralPossible: boolean;
    FlagHasInstallmentPlan: boolean;
    FlagHasDeferral: boolean;
    InstallmentPlanID: string;
    DeferralDueDate: Date;
    InstallmentPlanSet: ZIPK_ETILITY_CORE.InstallmentPlan[];
    InvoicePDF: ZIPK_ETILITY_CORE.InvoicePDF;
  }

  export interface BetaFeedback {
    ID: string;
    Satisfaction: number;
    FeedbackText: string;
  }

  export interface ReadingReason {
    ID: string;
    Description: string;
  }

  export interface EEHeating1Type {
    ID: string;
    Description: string;
  }

  export interface EEPremiseChoice {
    AdressInfo: ZIPK_ETILITY_CORE.AddressInfo;
    PremiseID: string;
    MeterNumber: string;
    UsingForEE: boolean;
    ConsumptionPerWeek: number;
  }

  export interface EEFlatType {
    ID: string;
    Description: string;
  }

  export interface EEElectricType {
    ID: string;
    Description: string;
  }

  export interface EEWaterHType {
    ID: string;
    Description: string;
  }

  export interface EEHeating2Type {
    ID: string;
    Description: string;
  }

  export interface EEHousehold {
    PartnerID: string;
    FlatType: string;
    Heating1: string;
    Heating2: string;
    WaterHeating: string;
    ElectricDevices: string;
    FlatArea: number;
    FlatOccupancy: number;
    EEElectricTypeSet: ZIPK_ETILITY_CORE.EEElectricType[];
    EEFlatTypeSet: ZIPK_ETILITY_CORE.EEFlatType[];
    EEHeating1TypeSet: ZIPK_ETILITY_CORE.EEHeating1Type[];
    EEHeating2TypeSet: ZIPK_ETILITY_CORE.EEHeating2Type[];
    EEWaterHTypeSet: ZIPK_ETILITY_CORE.EEWaterHType[];
  }

  export interface EEResult {
    PartnerId: string;
    RatinginterfaceKey: string;
    RatingGroupKey: string;
    WindowType: string;
    Bwz: number;
    BwzAvgAll: number;
    BwzAvgGroup: number;
    BwzMedianAll: number;
    BwzMedianGroup: number;
    Kwhpw: number;
    KwhpwAvgAll: number;
    KwhpwAvgGroup: number;
    KwhpwMedianAll: number;
    KwhpwMedianGroup: number;
  }

  export interface ProofOfOrigin {
    PremiseID: string;
    CreationDateTime: Date;
    Deleted: boolean;
    Rejected: boolean;
    KevNr: string;
    InstallationCertified: boolean;
    InstallationKevReg: string;
    InstallationNotDetached: boolean;
    InstallationPower: number;
    ProofOfOriginAllowed: boolean;
    WaitingPosition: number;
  }

  export interface AddressInfo {
    Building: string;
    City: string;
    C_O_Name: string;
    CountryID: string;
    District: string;
    Floor: string;
    HouseNo: string;
    LanguageID: string;
    POBox: string;
    POBoxPostalCode: string;
    PostalCode: string;
    Region: string;
    RoomNo: string;
    FlatLabel: string;
    AddressLabel: string;
    StandardFlag: string;
    Street: string;
    TaxJurisdictionCode: string;
    TimeZone: string;
  }

  export interface MasterDataKey {
    ContractAccountID: string;
    MoveDate: Date;
    PremiseID: string;
  }

  export interface Installment {
    InstallmentPlanID: string;
    InstallmentNumber: string;
    DueDate: Date;
    Amount: string;
    FlagPaid: boolean;
  }

  export interface MoveAddressBd {
    GP: string;
    GPType: string;
    Title: string;
    LastName: string;
    FirstName: string;
    Street: string;
    Housenumber: string;
    PostalCode: string;
    City: string;
    Country: string;
    Region: string;
    Phone: string;
    Email: string;
  }

  export interface MoveBankBd {
    BankAccountNumber: string;
    BankName: string;
    PaymentMethod: string;
  }

  export type AccountAddressSet = AccountAddress[];
  export type AccountContactSet = AccountContact[];
  export type AccountTitleSet = AccountTitle[];
  export type BankAccountSet = BankAccount[];
  export type ContactActionSet = ContactAction[];
  export type ContractSet = Contract[];
  export type ContractAccountSet = ContractAccount[];
  export type CountrySet = Country[];
  export type DeviceSet = Device[];
  export type EmailAdrSet = EmailAdr[];
  export type FaxSet = Fax[];
  export type InvoicePDFSet = InvoicePDF[];
  export type MeterReadingResultSet = MeterReadingResult[];
  export type MobileSet = Mobile[];
  export type PaymentMethodSet = PaymentMethod[];
  export type PhoneSet = Phone[];
  export type PremiseSet = Premise[];
  export type PremiseTypeSet = PremiseType[];
  export type RegisterToReadSet = RegisterToRead[];
  export type GetCustomizingSet = GetCustomizing[];
  export type CorrespVariantSet = CorrespVariant[];
  export type ConsumptionYearSet = ConsumptionYear[];
  export type UserAgreementSet = UserAgreement[];
  export type ConsumptionYearExportSet = ConsumptionYearExport[];
  export type CampaignHandlingSet = CampaignHandling[];
  export type InstallmentPlanSet = InstallmentPlan[];
  export type InstallmentPlanTypeSet = InstallmentPlanType[];
  export type RealEstateManagementSet = RealEstateManagement[];
  export type MeterReadingExportSet = MeterReadingExport[];
  export type BankSet = Bank[];
  export type PremiseLocationSet = PremiseLocation[];
  export type ConnectionObjectSet = ConnectionObject[];
  export type MoveSet = Move[];
  export type InvoiceSet = Invoice[];
  export type BetaFeedbackSet = BetaFeedback[];
  export type ReadingReasonSet = ReadingReason[];
  export type EEHeating1TypeSet = EEHeating1Type[];
  export type EEPremiseChoiceSet = EEPremiseChoice[];
  export type EEFlatTypeSet = EEFlatType[];
  export type EEElectricTypeSet = EEElectricType[];
  export type EEWaterHTypeSet = EEWaterHType[];
  export type EEHeating2TypeSet = EEHeating2Type[];
  export type EEHouseholdSet = EEHousehold[];
  export type EEResultSet = EEResult[];
  export type ProofOfOriginSet = ProofOfOrigin[];
  export type AccountSet = Account[];

}
