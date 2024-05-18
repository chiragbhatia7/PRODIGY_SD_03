package com.chirag.contactcrud.exception;

public class ContactNotFoundException extends RuntimeException {
    public ContactNotFoundException(Long id) {
        super("Could not find contact with the id "+id);
    }
}
