import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionvalueAggregateFieldsModelBase } from "./PokemonV2EncounterconditionvalueAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionvalueAggregateFieldsModel */
export interface PokemonV2EncounterconditionvalueAggregateFieldsModelType extends Instance<typeof PokemonV2EncounterconditionvalueAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionvalueAggregateFieldsModel */
export { selectFromPokemonV2EncounterconditionvalueAggregateFields, pokemonV2EncounterconditionvalueAggregateFieldsModelPrimitives, PokemonV2EncounterconditionvalueAggregateFieldsModelSelector } from "./PokemonV2EncounterconditionvalueAggregateFieldsModel.base"

/**
 * PokemonV2EncounterconditionvalueAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_encounterconditionvalue"
 */
export const PokemonV2EncounterconditionvalueAggregateFieldsModel = PokemonV2EncounterconditionvalueAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
