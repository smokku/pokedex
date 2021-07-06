import { Instance } from "mobx-state-tree"
import { PokemonV2BerryflavormapAggregateFieldsModelBase } from "./PokemonV2BerryflavormapAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryflavormapAggregateFieldsModel */
export interface PokemonV2BerryflavormapAggregateFieldsModelType extends Instance<typeof PokemonV2BerryflavormapAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryflavormapAggregateFieldsModel */
export { selectFromPokemonV2BerryflavormapAggregateFields, pokemonV2BerryflavormapAggregateFieldsModelPrimitives, PokemonV2BerryflavormapAggregateFieldsModelSelector } from "./PokemonV2BerryflavormapAggregateFieldsModel.base"

/**
 * PokemonV2BerryflavormapAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_berryflavormap"
 */
export const PokemonV2BerryflavormapAggregateFieldsModel = PokemonV2BerryflavormapAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
