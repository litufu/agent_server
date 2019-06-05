function user(parent, args, context) {
  return context.prisma.school({ id: parent.id }).user()
}

function location(parent, args, context) {
  return context.prisma.school({ id: parent.id }).location()
}

module.exports = {
  user,
  location,
}