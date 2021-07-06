import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionAggregateFieldsModelBase } from "./PokemonV2EncounterconditionAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionAggregateFieldsModel */
export interface PokemonV2EncounterconditionAggregateFieldsModelType extends Instance<typeof PokemonV2EncounterconditionAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionAggregateFieldsModel */
export { selectFromPokemonV2EncounterconditionAggregateFields, pokemonV2EncounterconditionAggregateFieldsModelPrimitives, PokemonV2EncounterconditionAggregateFieldsModelSelector } from "./PokemonV2EncounterconditionAggregateFieldsModel.base"

/**
 * PokemonV2EncounterconditionAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_encountercondition"
 */
export const PokemonV2EncounterconditionAggregateFieldsModel = PokemonV2EncounterconditionAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
