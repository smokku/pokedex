import { Instance } from "mobx-state-tree"
import { PokemonV2PalparkareanameAggregateFieldsModelBase } from "./PokemonV2PalparkareanameAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PalparkareanameAggregateFieldsModel */
export interface PokemonV2PalparkareanameAggregateFieldsModelType extends Instance<typeof PokemonV2PalparkareanameAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PalparkareanameAggregateFieldsModel */
export { selectFromPokemonV2PalparkareanameAggregateFields, pokemonV2PalparkareanameAggregateFieldsModelPrimitives, PokemonV2PalparkareanameAggregateFieldsModelSelector } from "./PokemonV2PalparkareanameAggregateFieldsModel.base"

/**
 * PokemonV2PalparkareanameAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_palparkareaname"
 */
export const PokemonV2PalparkareanameAggregateFieldsModel = PokemonV2PalparkareanameAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
