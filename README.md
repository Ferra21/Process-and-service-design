# Digital-Pharma Platform 
Digital-Pharma is a company that sells digital and innovative products to grow pharmacists’ business and patient care. A new platform will be launched in Italy to help patients and pharmacists to speed up the process of prescription, ordering and sale of medicines.
## Process definition:
To access the service, people can use their national online identity (SPID), which will be confirmed through two-factor authentication, to secure access to the platform. If a patient doesn’t own a SPID account, will be registered using essential data needed to send a high urgency request (name, email, birth date, health card number, health code, phone number…), and his identity will be confirmed using an OTP code sent directly on their phone. 

At this point, the customer can compile a new request and insert its prescription code into a form.
Medical prescription is retrieved using the external service provided by the regional health care system and analysed by the platform, checking if it is part of medical therapy or not.

When medicines are selected, drug availability is checked in each of the pharmacies connected to the service, and a ranked list of the closest ones to the patient is generated. If the pharmacy doesn’t have the drug in stock, the platform informs the patient that they need to order it and communicates the possible date of arrival. Otherwise, if the medicine is “in-house”, the customer can accept to reserve it.

At this point, a new order (to buy and if needed reserve a drug) is generated and sent to a pharmacy. The patient can decide to directly reach the store and buy the drug or pay it online (through an external payment service) and receive the medicine at home.
## Activities:
- Internal:
    - One-time Registration
    - New request submission
    - Analyse medical therapy
    - Retrieve pharmacies list
    - Send appointment
- External:
    - SPID login
    - Check medical prescription (Regional Health Platform)
    - Check drug availability/Send order (Pharmacies Service)
    - Online Payment
    - Delivery partner
## Enterprise System:
The application components used internally in the enterprise are:
-  CRM, used to manage all the interactions with patients/customers such as login process, request submission, medical therapy analysis, patients order choices…
- Pharmacies-Locations service, used to access the internal DB in which basic information (not drugs availability) about pharmacies connected to the platform are stored and to generate a list of pharmacies close to the patient location.

Other services are defined by external companies and accessed by the process, such as SPID, regional
health service…