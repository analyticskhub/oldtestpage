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
 _brand:platform:pageType:product segment: product name_**

**application and enquiry convention**

| Brand         | Platform      | Form Type    | Prod segment | Prod category/name       | new formname(eVar23)     |
| ------------- |:-------------:|:------------:|:------------:|:------------------------:|:------------------------:| 
| Westpac       | oneclick      | application  | consumer     | savings & transaction    | wbc:wow:app:cons:st      |
| Westpac       | oneclick      | application  | business     | savings & transaction    | wbc:wow:app:bus:st       |
| Westpac       | oregon        | application  | consumer     | Credit card              | wbc:wow:app:cons:cc      |
| Westpac       | oregon        | application  | business     | Credit card              | wbc:wow:app:bss:cc       |

Examples by platform & Brand

WBC

Application
```
wbc:ore:app:cons:cc
wbc:wow:app:cons:st
wbc:dom:app:cons:td
wbc:voy:app:bus:td
wbc:ein:app:cons:in
```
Enquiry
```
wbc:wow:enq:cons:st
wbc:dom:enq:cons:td
wbc:voy:enq:bus:td
```

STG

```
stg:oaf:app:cons:cc
stg:ace:app:cons:st
stg:wow:app:bus:td
stg:wap:app:bus:st
```

BOM

```
bom:oaf:app:bus:cc
bom:ace:app:bus:st
bom:wow:app:cons:td
bom:wap:app:cons:st
```

BSA

```
bsa:oaf:app:cons:cc
bsa:ace:app:cons:st
bsa:wow:app:bus:td
```


### new variables and events

**new eVars**

| eVars       | Name           |
| ------------- |:-------------:|
| eVar41     | Journey-type |
| eVar42      | Form-type   |
| eVar43 | Account status   |
| eVar72 | Account-type     |

**new Props**

| Props       | Name           |
| ------------- |:-------------:|
| prop41     | product-count |
| prop42      | business-type   |

**new Events**

| Events       | Name           |
| ------------- |:-------------:|
| event17     | Application welcome |
| event73      | Quote save  |
| event74 | Quote retrieve   |
| event86 | Quote start     |
| event87 | Quote complete    |

## Other changes

* The transaction ID (evar39 and s.transactionID) will now be  combined value of multiple transaction with product id prefix
* the productID will have additional property to emphasize the primary product (primaryProduct : 'true'), in additon the tracking will contain a "1-" prefix to productID
* the productID will have additional property to emphasize the secondary product (secondaryProduct : 'true'), in additon the tracking will contain a "2-" prefix to productID
* in additon to already existing property for cross sell,  the tracking will contain a "X-" prefix (instead of suffix) to productID
* Application Status (old property: formCompleteStatus): Updated code to read new property, and new conditions to work only if it's a STP Form with status information


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

