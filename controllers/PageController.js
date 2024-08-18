const mainView = (req, res) => {
    res.render('dashboard')
}
const iconsView = (req, res) => {
    res.render('icons')
}
const mapsView = (req, res) => {
    res.render('maps')
}
const notificationsView = (req, res) => {
    res.render('notifications')
}
const userView = (req, res) => {
    res.render('user')
}
const tablesView = (req, res) => {
    res.render('tables')
}
const typographyView = (req, res) => {
    res.render('typography')
}
const rtlView = (req, res) => {
    res.render('rtl')
}

module.exports = { mainView, iconsView, mapsView, notificationsView, userView, tablesView, typographyView, rtlView }