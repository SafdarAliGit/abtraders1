frappe.ui.form.on('Sales Order', { 
    customer: function (frm) {
        frappe.call({
            method: 'erpnext.accounts.utils.get_balance_on',
            args: {
                doctype: 'Sales Order',
                party_type: 'Customer',
                party: frm.doc.customer,
                outstanding_only: 1
            },
            callback: function (r) {
                if (r.message) {
                    frm.set_value('current_outstanding', r.message);
                }
            }
        });
    },
});