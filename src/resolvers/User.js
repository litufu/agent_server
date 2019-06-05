function school(parent, args, context) {
  return context.prisma.user({ id: parent.id }).school()
}

function statistics(parent, args, context) {
  return context.prisma.user({ id: parent.id }).statistics()
}


module.exports = {
  school,
  statistics,
}
