async function post(parent, args, context, info) {
  const { userId } = context;

  let postedBy = undefined;
  if (userId) {
    postedBy = { connect: { id: userId } };
  }

  const newLink = await context.prisma.link.create({
    data: {
      url: args.url,
      description: args.description,
      postedBy,
    },
  });

  context.pubsub.publish('NEW_LINK', newLink);

  return newLink;
}
