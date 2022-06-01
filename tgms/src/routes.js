import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import otp from './components/otp'
import password from './components/password'
import Profile from './components/Profile'
import Dashboard from './components/Dashboard'
import FileUp from './components/FileUp'
import Dashboard2 from './components/Dashboard2'
import Attendence from './components/Attendence'
import EmployeeList from './components/EmployeeList'
import Payslip from './components/Payslip'
import Download from './components/Download'
import LoanSet from './components/LoanSet'
import SalaryInsert from './components/SalaryInsert'
import adduser from './components/adduser'
import warehousereport from './components/warehousereport'
import warehousein from './components/warehousein'
import farmerlist from './components/farmerlist'
import repayment from './components/repayment'


Vue.use(VueRouter);

const routes = [
    { path: '/', component: Register },
    { path: '/login', component: Login },
    { path: '/home', component: Home },
    { path: '/otp', component: otp },
    { path: '/pass', component: password },
    { path: '/profile', component: Profile, name: 'Profile' },
    { path: '/dash', component: Dashboard },
    { path: '/files', component: FileUp },
    { path: '/dash2', component: Dashboard2 },
    { path: '/attend', component: Attendence },
    { path: '/emplist', component: EmployeeList },
    { path: '/Payslip', component: Payslip },
    { path: '/Download', component: Download },
    { path: '/set', component: LoanSet },
    { path: '/setsal', component: SalaryInsert },
    { path: '/add', component: adduser },
    { path: '/wreport', component: warehousereport },
    { path: '/win', component: warehousein },
    { path: '/flist', component: farmerlist },
    { path: '/repay', component: repayment, name: 'repayment' }

]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router;