import { Instance } from "mobx-state-tree"
import { PokemonV2BerryfirmnessnameAggregateModelBase } from "./PokemonV2BerryfirmnessnameAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2BerryfirmnessnameAggregateModel */
export interface PokemonV2BerryfirmnessnameAggregateModelType extends Instance<typeof PokemonV2BerryfirmnessnameAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryfirmnessnameAggregateModel */
export { selectFromPokemonV2BerryfirmnessnameAggregate, pokemonV2BerryfirmnessnameAggregateModelPrimitives, PokemonV2BerryfirmnessnameAggregateModelSelector } from "./PokemonV2BerryfirmnessnameAggregateModel.base"

/**
 * PokemonV2BerryfirmnessnameAggregateModel
 *
 * aggregated selection of "pokemon_v2_berryfirmnessname"
 */
export const PokemonV2BerryfirmnessnameAggregateModel = PokemonV2BerryfirmnessnameAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
