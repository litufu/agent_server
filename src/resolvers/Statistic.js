function user(parent, args, context) {
    return context.prisma.statistic({ id: parent.id }).user()
  }
  
  function school(parent, args, context) {
    return context.prisma.statistic({ id: parent.id }).school()
  }
  
  module.exports = {
    user,
    school,
  }