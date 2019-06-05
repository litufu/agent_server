function schools(parent, args, context) {
  return context.prisma.location({ id: parent.id }).schools()
}

module.exports = {
  schools,
}
