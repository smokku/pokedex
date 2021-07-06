import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionvaluenameAggregateFieldsModelBase } from "./PokemonV2EncounterconditionvaluenameAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionvaluenameAggregateFieldsModel */
export interface PokemonV2EncounterconditionvaluenameAggregateFieldsModelType extends Instance<typeof PokemonV2EncounterconditionvaluenameAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionvaluenameAggregateFieldsModel */
export { selectFromPokemonV2EncounterconditionvaluenameAggregateFields, pokemonV2EncounterconditionvaluenameAggregateFieldsModelPrimitives, PokemonV2EncounterconditionvaluenameAggregateFieldsModelSelector } from "./PokemonV2EncounterconditionvaluenameAggregateFieldsModel.base"

/**
 * PokemonV2EncounterconditionvaluenameAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_encounterconditionvaluename"
 */
export const PokemonV2EncounterconditionvaluenameAggregateFieldsModel = PokemonV2EncounterconditionvaluenameAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
