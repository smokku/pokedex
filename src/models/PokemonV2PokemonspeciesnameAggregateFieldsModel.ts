import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesnameAggregateFieldsModelBase } from "./PokemonV2PokemonspeciesnameAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesnameAggregateFieldsModel */
export interface PokemonV2PokemonspeciesnameAggregateFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesnameAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesnameAggregateFieldsModel */
export { selectFromPokemonV2PokemonspeciesnameAggregateFields, pokemonV2PokemonspeciesnameAggregateFieldsModelPrimitives, PokemonV2PokemonspeciesnameAggregateFieldsModelSelector } from "./PokemonV2PokemonspeciesnameAggregateFieldsModel.base"

/**
 * PokemonV2PokemonspeciesnameAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_pokemonspeciesname"
 */
export const PokemonV2PokemonspeciesnameAggregateFieldsModel = PokemonV2PokemonspeciesnameAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
