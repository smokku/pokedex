import { Instance } from "mobx-state-tree"
import { PokemonV2MovelearnmethoddescriptionAggregateModelBase } from "./PokemonV2MovelearnmethoddescriptionAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2MovelearnmethoddescriptionAggregateModel */
export interface PokemonV2MovelearnmethoddescriptionAggregateModelType extends Instance<typeof PokemonV2MovelearnmethoddescriptionAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovelearnmethoddescriptionAggregateModel */
export { selectFromPokemonV2MovelearnmethoddescriptionAggregate, pokemonV2MovelearnmethoddescriptionAggregateModelPrimitives, PokemonV2MovelearnmethoddescriptionAggregateModelSelector } from "./PokemonV2MovelearnmethoddescriptionAggregateModel.base"

/**
 * PokemonV2MovelearnmethoddescriptionAggregateModel
 *
 * aggregated selection of "pokemon_v2_movelearnmethoddescription"
 */
export const PokemonV2MovelearnmethoddescriptionAggregateModel = PokemonV2MovelearnmethoddescriptionAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
