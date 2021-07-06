import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesAggregateFieldsModelBase } from "./PokemonV2PokemonspeciesAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesAggregateFieldsModel */
export interface PokemonV2PokemonspeciesAggregateFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesAggregateFieldsModel */
export { selectFromPokemonV2PokemonspeciesAggregateFields, pokemonV2PokemonspeciesAggregateFieldsModelPrimitives, PokemonV2PokemonspeciesAggregateFieldsModelSelector } from "./PokemonV2PokemonspeciesAggregateFieldsModel.base"

/**
 * PokemonV2PokemonspeciesAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_pokemonspecies"
 */
export const PokemonV2PokemonspeciesAggregateFieldsModel = PokemonV2PokemonspeciesAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
