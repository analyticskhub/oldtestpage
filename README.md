# WBG Form updates

This repo consists details and documentation of changes made to form tracking. 
Forms in WBG are classified into following category

1. Application forms
2. Enquiry forms
3. Self service forms
4. Payment forms
5. Registration forms
6. Login forms
7. Survey forms
8. Quote forms

## FormName (evar23) Conventions

Listed below is the conventions used for populating form name value (eVar23) various type of forms. 
This will be consistent acorss all the WBG brands. 

### 1. Application forms

The new form name convention will have the following structure 

**application, quote and enquiry convention**

**_Brand: Platform: Form Type : Product segment: Product name_**

Examples by platform & Brand

| Brand         | Platform      | Form Type    | Prod segment | Prod category/name       | new formname(eVar23)     |
| ------------- |:-------------:|:------------:|:------------:|:------------------------:|:------------------------:| 
| Westpac       | oneclick      | application  | consumer     | savings & transaction    | _wbc:wow:app:cons:st_ |
| Westpac       | oneclick      | application  | business     | savings & transaction    | **wbc:wow:app: bus:st**  |
| Westpac       | oregon        | application  | consumer     | Credit card              | wbc:wow:app:cons:cc      |
| Westpac       | oregon        | application  | business     | Credit card              | wbc:wow:app: bus:cc      |
| StGeorge      | oneclick      | application  | consumer     | savings & transaction    | stg:wow:app:cons:st      |
| StGeorge      | oneclick      | application  | business     | savings & transaction    | stg:wow:app: bus:st      |
| StGeorge      | oaf           | application  | consumer     | Credit card              | stg:oaf:app:cons:cc      |
| StGeorge      | ace           | application  | business     | Credit card              | stg:ace:app: bus:cc      |
| BankSA        | oneclick      | application  | consumer     | savings & transaction    | bsa:wow:app:cons:st      |
| BankSA        | oneclick      | application  | business     | savings & transaction    | bsa:wow:app: bus:st      |
| BOM           | oneclick      | application  | consumer     | savings & transaction    | bom:wow:app:cons:cc      |
| BOM           | oneclick      | application  | business     | savings & transaction    | bom:wow:app: bus:cc      |
| wbc           | oneclick      | quote        | consumer     | Insurance                | wbc:wow:quo:cons:in      |
| stg           | oneclick      | quote        | consumer     | Insurance                | stg:wow:quo:cons:in      |
| bom           | oneclick      | quote        | consumer     | Insurance                | bom:wow:quo:cons:in      |
| stg           | oneclick      | enquiry      | consumer     | Home loan                | stg:wow:enq:cons:hl      |
| wbc           | oneclick      | enquiry      | consumer     | Home loan                | wbc:wow:enq:cons:hl      |
| bom           | oneclick      | enquiry      | consumer     | Home loan                | bom:wow:enq:cons:hl      |
| bsa           | oneclick      | enquiry      | business     | super                    | bom:wow:enq: bus:sl      |



### New Variables and Events added

**new eVars**

| eVars         | Name          |
| ------------- |:-------------:|
| eVar41        | Journey-type  |
| eVar42        | Form-type     |
| eVar43        | Account status|
| eVar72        | Account-type  |

**new Props**

| Props         | Name          |
| ------------- |:-------------:|
| prop41        | product-count |
| prop42        | business-type |

**new Events**

| Events        | Name          |
| ------------- |:-------------:|
| event17       | App welcome   |
| event73       | Quote save    |
| event74       | Quote retrieve|
| event86       | Quote start   |
| event87       | Quote complete|


### Additonal Requirements from business 

1. Multiiple transactionID: Ability to capture unique transaction id when multiple products are sold in the same application
2. ProductID Updates: Ability to identify if a product is sold as primary, secondary or as a cross sell
3. Application status: formerly knows as formCompleteStatus will now be updated to application status to be used only on oneclick STP forms. 



## Code changes/reference
* eVars
    * eVar41:Journey-type - wbg|form|rq1
    * eVar42:Form-type
    * eVar43:Account status
    * eVar72:Account-type
* Props
    * prop41:product-count
    * prop42:business-type
* Events
    * event17:Application welcome
    * event73:Quote save
    * event74:Quote retrieve
    * event86:Quote start
    * event87:Quote complete

## DataLayer Properties - WBG & WBC

datalayer for applications compatible to both wbc and wbg tracking. 

```
digitalData = {
//generic_Vars-START
    'siteBrand': 'wbc',
    'siteName': 'oregon', //oregon|oneclick|ace|oaf|webapp
    'siteSection': 'oregon',
    'siteSubSection': 'consumercards',
    'siteEnv': 'prod', // prod|test
    'siteDomain': 'www.westpac.com.au',
    'siteExperience': 'mob', //mob|desktop|tab
//generic_Vars-END

//form_specific_vars-START
//------old wbc specific properties-----
    'formName': 'savings and transaction"',
    'formType': 'checkurl',
    'transactionID': 'xyzzzz',
//------ old wbc specific properties ----
    'formIsSTP': 'true', //bankwow forms only
    'formVariant': 'na', // activate|unlock|na bankwow forms only
    'newFormName': 'st', // new product group as part of formname
    'formStatus': 'approved',
    'journeyType': 'pub', // pub|auth|concise|enterprise
    'accountType': 'na', // single|joint|multiple
    'businessType': 'na', // sole-trader|sole-director|company
    'trackOnce': 'true',
    'pageName': 'thank-you',
    'eventKey' : 'mob:wbc_oregon_app_cc_thank-you', // unique eventKey for spa-page|dialog|popup only
    'pageStep': 'complete', // welcome|start|save|retrieve|complete
    'pageType': 'application',
    'productID': [{
        'prod': 'WBC03PL005',
        'qty': '2',
        'events': 'deposit=0',
        'merch': 'options=estatement',
        'primaryProd': 'true' // for all primary products sold, mandatory property
    },
    {
        'prod': 'WBC03PL007',
        'qty': '1',
        'events': 'deposit=0',
        'merch': 'options=estatement',
        'secondaryProd': 'true' // for all secondary products sold, which is sold or default option with primary
    }, {
        'prod': 'WBC03PL005',
        'crossSell': 'true',
        'qty': '1'
    }
    ],
// if form_IsSTP && applicationStatus exists populate application status eVar72
// separated by ; if more than one product
    'applicationStatus': [{
        'accountStatus': 'opened',
        'profileStatus': 'created',
        'verificationStatus': 'idv',
        'exceptionCode': '12112',
    }, {
        'accountStatus': 'opened',
        'profileStatus': 'created',
        'verificationStatus': 'idv',
        'exceptionCode': '14442'
    }
    ],
// new property for wbg, replaces "transactionID" to accomodate multiple transaction ID 
    'appReference': [{
        'prod': 'WBC03PL005',
        'Id': '1',
    },
    {
        'prod': 'WBC03PL005',
        'Id': '1',
    }
    ]
//form_specific_vars-END
}
```

## Dependencies

Form name depends on siteID which will either come from analytics or siteID code in s_code.js

# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) 
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]
## [0.0.4] - 2017-02-02
### Added
- Better explanation of the difference between the file ("CHANGELOG")
and its function "the change log".

### Changed
- Refer to a "change log" instead of a "CHANGELOG" throughout the site
to differentiate between the file and the purpose of the file — the
logging of changes.

### Removed
- Remove redundant/old SDD variables.

## [0.0.3] - 2014-08-26
### Added
- New BT variable added.

## [0.0.2] - 2017-01-20
### Added
- Added SEMVER tracking of form related changes.

## 0.0.1 - 2016-12-15
### Added
- Added the code for following new evar, props and events 
    * eVars
        * eVar41:Journey-type
        * eVar42:Form-type
        * eVar43:Account status
        * eVar72:Account-type
    * Props
        * prop41:product-count
        * prop42:business-type
    * Events
        * event17:Application welcome
        * event73:Quote save
        * event74:Quote retrieve
        * event86:Quote start
        * event87:Quote complete
- Added new method to track multiple transaction ID for WBG


### Changed
- Changed s.products code to reflect primary, secondary and cross sell product
- Changed formCompleteStatus to application status and to be tracked for all oneclick forms with STP

