def custom_before_save(doc, method):
     current_outstanding = float(doc.custom_current_outstanding) if doc.custom_current_outstanding else 0
     rounded_total = float(doc.rounded_total) if doc.rounded_total else 0
     doc.custom_total_with_outstanding = rounded_total + current_outstanding
