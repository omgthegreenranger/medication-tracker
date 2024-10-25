
### Tables:
#### medication: 
**Required**
- `name` - name of the medication
- `dose-pill` - how many pills per single dose
- `dosage-sched` - how often do you take a single dose? Option for per day, per week, per month, etc.
- `pid` - pill ID
- `record` - history of dosages

**Optional**
- `med-name`: - chemical name - optional
- `dose-per`: "150mg",
- `current-count` - how many pills do you currently have left?

#### dose-record
**Required**
- `datetime` - `datetime` taken
- `uuid` - datetime id
- `pid` - foreign key to medication

**Optional**
- `comments` - any comments, to track medication efficacy, etc.