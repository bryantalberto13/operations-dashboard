// Navigation
function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(p => p.style.display = 'none');
  document.getElementById(pageId).style.display = 'block';
}

// Sample data for Operating Hours
const hoursData = [
  { date: '2025-12-24', operatingStart: '09:00', operatingEnd: '18:00', shiftStart: '09:00', shiftEnd: '17:00' },
  { date: '2025-12-25', operatingStart: '10:00', operatingEnd: '16:00', shiftStart: '10:00', shiftEnd: '16:00' },
];

// Populate table
function populateHoursTable() {
  const tbody = document.querySelector('#hours-table tbody');
  tbody.innerHTML = '';
  hoursData.forEach(row => {
    const tr = document.createElement('tr');

    const totalHours = calculateHours(row.operatingStart, row.operatingEnd);
    const totalShiftHours = calculateHours(row.shiftStart, row.shiftEnd);

    tr.innerHTML = `
      <td>${row.date}</td>
      <td>${row.operatingStart}</td>
      <td>${row.operatingEnd}</td>
      <td>${totalHours}</td>
      <td>${row.shiftStart}</td>
      <td>${row.shiftEnd}</td>
      <td>${totalShiftHours}</td>
    `;
    tbody.appendChild(tr);
  });
}

// Simple hour calculation
function calculateHours(start, end) {
  const [sH, sM] = start.split(':').map(Number);
  const [eH, eM] = end.split(':').map(Number);
  return (eH + eM/60) - (sH + sM/60);
}

// Export Excel placeholder
function exportExcel() {
  alert('Export not working yet.');
}

// Initialize table
populateHoursTable();
