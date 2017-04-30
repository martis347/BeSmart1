﻿using Microsoft.EntityFrameworkCore;
using OrderViewer.Core.EntityLayer;

namespace OrderViewer.Core.DataLayer.Mapping
{
    public class SalesPersonMap : IEntityMap
    {
        public void Map(ModelBuilder modelBuilder)
        {
            var entity = modelBuilder.Entity<SalesPerson>();

            entity.ToTable("SalesPerson", "Sales");

            entity.HasKey(p => p.BusinessEntityID);
        }
    }
}
