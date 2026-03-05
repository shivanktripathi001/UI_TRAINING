# Employee Registration Application

A complete Angular application for managing employee records with full CRUD operations using JSON Server as backend.

## Features

✅ Employee Registration with Reactive Forms
✅ Form Validation with Error Messages
✅ Employee List with Search/Filter
✅ Edit Employee Details
✅ Delete Employee with Confirmation
✅ Loading Spinners
✅ Success/Error Messages
✅ Responsive Design
✅ JSON Server Backend

## Tech Stack

- **Frontend**: Angular 17 (Standalone Components)
- **Backend**: JSON Server
- **Styling**: SCSS
- **Forms**: Reactive Forms
- **HTTP**: HttpClient

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (`npm install -g @angular/cli`)

## Installation

### 1. Install Dependencies

```bash
npm install
```

### 2. Install JSON Server Globally

```bash
npm install -g json-server
```

## Running the Application

### Step 1: Start JSON Server (Terminal 1)

```bash
json-server --watch db.json --port 3000
```

JSON Server will run on: http://localhost:3000

### Step 2: Start Angular App (Terminal 2)

```bash
ng serve
```

Angular app will run on: http://localhost:4200

## Application Structure

```
src/app/
├── components/
│   ├── employee-register/    # Registration form component
│   └── employee-list/         # Employee list component
├── services/
│   └── employee.service.ts    # HTTP service for API calls
├── models/
│   └── employee.model.ts      # Employee interface
├── app.routes.ts              # Application routes
└── app.config.ts              # App configuration
```

## Routes

- `/` or `/register` - Employee Registration Form (Default)
- `/employees` - Employee List View

## API Endpoints (JSON Server)

- `GET /employees` - Get all employees
- `POST /employees` - Add new employee
- `PUT /employees/:id` - Update employee
- `DELETE /employees/:id` - Delete employee

## Form Validation Rules

| Field | Validation |
|-------|-----------|
| First Name | Required, Min 2 characters |
| Last Name | Required, Min 2 characters |
| Email | Required, Valid email format |
| Phone | Required, 10 digits only |
| Salary | Required, Positive number |
| Address | Required |

## Features in Detail

### 1. Employee Registration
- Reactive form with validation
- Real-time error messages
- Submit to add new employee
- Reset button to clear form
- Edit mode when navigating from employee list

### 2. Employee List
- Display all employees in table
- Search/filter by name or email
- Edit button - navigates to form with prefilled data
- Delete button - shows confirmation dialog
- Loading spinner during API calls
- "No employees found" message when list is empty

### 3. Responsive Design
- Mobile-friendly layout
- Responsive table
- Adaptive form layout

## Usage

### Adding an Employee
1. Navigate to `/register` (default route)
2. Fill in all required fields
3. Click "Submit"
4. Success message will appear
5. Form will reset automatically

### Viewing Employees
1. Click "View Employees" or navigate to `/employees`
2. See all registered employees in table format
3. Use search box to filter employees

### Editing an Employee
1. Go to employee list
2. Click "Edit" button on any employee
3. Form will open with prefilled data
4. Modify fields and click "Update"
5. Redirects to employee list after update

### Deleting an Employee
1. Go to employee list
2. Click "Delete" button
3. Confirm deletion in dialog
4. Employee will be removed

## Troubleshooting

### JSON Server not starting
```bash
# Install globally
npm install -g json-server

# Or run locally
npx json-server --watch db.json --port 3000
```

### Port already in use
```bash
# Change Angular port
ng serve --port 4300

# Change JSON Server port
json-server --watch db.json --port 3001
# Update apiUrl in employee.service.ts
```

### CORS Issues
JSON Server automatically handles CORS. If issues persist, restart JSON Server.

## Build for Production

```bash
ng build --configuration production
```

Build artifacts will be in `dist/` directory.

## Testing

Run unit tests:
```bash
ng test
```

Run end-to-end tests:
```bash
ng e2e
```

## Future Enhancements

- [ ] Pagination for employee list
- [ ] Advanced search filters
- [ ] Export to CSV/Excel
- [ ] Employee profile pictures
- [ ] Department management
- [ ] Salary history tracking
- [ ] Authentication & Authorization

## License

MIT

## Author

Created as part of Angular training project
