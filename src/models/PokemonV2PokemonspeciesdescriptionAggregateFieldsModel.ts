import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesdescriptionAggregateFieldsModelBase } from "./PokemonV2PokemonspeciesdescriptionAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesdescriptionAggregateFieldsModel */
export interface PokemonV2PokemonspeciesdescriptionAggregateFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesdescriptionAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesdescriptionAggregateFieldsModel */
export { selectFromPokemonV2PokemonspeciesdescriptionAggregateFields, pokemonV2PokemonspeciesdescriptionAggregateFieldsModelPrimitives, PokemonV2PokemonspeciesdescriptionAggregateFieldsModelSelector } from "./PokemonV2PokemonspeciesdescriptionAggregateFieldsModel.base"

/**
 * PokemonV2PokemonspeciesdescriptionAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_pokemonspeciesdescription"
 */
export const PokemonV2PokemonspeciesdescriptionAggregateFieldsModel = PokemonV2PokemonspeciesdescriptionAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
