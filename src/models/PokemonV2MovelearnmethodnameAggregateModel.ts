import { Instance } from "mobx-state-tree"
import { PokemonV2MovelearnmethodnameAggregateModelBase } from "./PokemonV2MovelearnmethodnameAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2MovelearnmethodnameAggregateModel */
export interface PokemonV2MovelearnmethodnameAggregateModelType extends Instance<typeof PokemonV2MovelearnmethodnameAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovelearnmethodnameAggregateModel */
export { selectFromPokemonV2MovelearnmethodnameAggregate, pokemonV2MovelearnmethodnameAggregateModelPrimitives, PokemonV2MovelearnmethodnameAggregateModelSelector } from "./PokemonV2MovelearnmethodnameAggregateModel.base"

/**
 * PokemonV2MovelearnmethodnameAggregateModel
 *
 * aggregated selection of "pokemon_v2_movelearnmethodname"
 */
export const PokemonV2MovelearnmethodnameAggregateModel = PokemonV2MovelearnmethodnameAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
