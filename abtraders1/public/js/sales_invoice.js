frappe.ui.form.on('Sales Invoice', { 

    customer: function (frm) {
        frappe.call({
            method: 'erpnext.accounts.utils.get_balance_on',
            args: {
                doctype: 'Sales Invoice',
                party_type: 'Customer',
                party: frm.doc.customer,
                outstanding_only: 1
            },
            callback: function (r) {
                if (r.message) {
                    frm.set_value('custom_current_outstanding', r.message);
                }
            }
        });
    },
  });