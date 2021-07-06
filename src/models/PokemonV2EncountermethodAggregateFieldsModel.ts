import { Instance } from "mobx-state-tree"
import { PokemonV2EncountermethodAggregateFieldsModelBase } from "./PokemonV2EncountermethodAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncountermethodAggregateFieldsModel */
export interface PokemonV2EncountermethodAggregateFieldsModelType extends Instance<typeof PokemonV2EncountermethodAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncountermethodAggregateFieldsModel */
export { selectFromPokemonV2EncountermethodAggregateFields, pokemonV2EncountermethodAggregateFieldsModelPrimitives, PokemonV2EncountermethodAggregateFieldsModelSelector } from "./PokemonV2EncountermethodAggregateFieldsModel.base"

/**
 * PokemonV2EncountermethodAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_encountermethod"
 */
export const PokemonV2EncountermethodAggregateFieldsModel = PokemonV2EncountermethodAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
