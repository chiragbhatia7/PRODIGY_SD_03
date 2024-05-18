package com.chirag.contactcrud.controller;

import com.chirag.contactcrud.exception.ContactNotFoundException;
import com.chirag.contactcrud.model.Contact;
import com.chirag.contactcrud.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class ContactController {
    @Autowired
    private ContactRepository contactRepository;

    @PostMapping("/contact")
    Contact newContact(@RequestBody Contact newContact) {
        return contactRepository.save(newContact);
    }

    @GetMapping("/contacts")
    List<Contact> getAllContacts() {
        return contactRepository.findAllByOrderByIdDesc();
    }

    @GetMapping("/contact/{id}")
    Contact getContactById(@PathVariable Long id) {
        return contactRepository.findById(id).orElseThrow(() -> new ContactNotFoundException(id));
    }

    @PutMapping("/contact/{id}")
    Contact updateContact(@RequestBody Contact newContact, @PathVariable Long id) {
        return contactRepository.findById(id).map(contact -> {
            contact.setName(newContact.getName());
            contact.setEmail(newContact.getEmail());
            contact.setPhone_number(newContact.getPhone_number());
            return contactRepository.save(contact);
        }).orElseThrow(() -> new ContactNotFoundException(id));
    }

    @DeleteMapping("/contact/{id}")
    String deleteContact(@PathVariable Long id) {
        if (!contactRepository.existsById(id)) {
            throw new ContactNotFoundException(id);
        }
        contactRepository.deleteById(id);
        return "Contact with the id " + id + " has been deleted";
    }
}
