import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionvaluemapAggregateFieldsModelBase } from "./PokemonV2EncounterconditionvaluemapAggregateFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionvaluemapAggregateFieldsModel */
export interface PokemonV2EncounterconditionvaluemapAggregateFieldsModelType extends Instance<typeof PokemonV2EncounterconditionvaluemapAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionvaluemapAggregateFieldsModel */
export { selectFromPokemonV2EncounterconditionvaluemapAggregateFields, pokemonV2EncounterconditionvaluemapAggregateFieldsModelPrimitives, PokemonV2EncounterconditionvaluemapAggregateFieldsModelSelector } from "./PokemonV2EncounterconditionvaluemapAggregateFieldsModel.base"

/**
 * PokemonV2EncounterconditionvaluemapAggregateFieldsModel
 *
 * aggregate fields of "pokemon_v2_encounterconditionvaluemap"
 */
export const PokemonV2EncounterconditionvaluemapAggregateFieldsModel = PokemonV2EncounterconditionvaluemapAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
