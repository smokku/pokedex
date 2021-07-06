import { Instance } from "mobx-state-tree"
import { PokemonV2MovedamageclassnameAggregateModelBase } from "./PokemonV2MovedamageclassnameAggregateModel.base"

/* The TypeScript type of an instance of PokemonV2MovedamageclassnameAggregateModel */
export interface PokemonV2MovedamageclassnameAggregateModelType extends Instance<typeof PokemonV2MovedamageclassnameAggregateModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovedamageclassnameAggregateModel */
export { selectFromPokemonV2MovedamageclassnameAggregate, pokemonV2MovedamageclassnameAggregateModelPrimitives, PokemonV2MovedamageclassnameAggregateModelSelector } from "./PokemonV2MovedamageclassnameAggregateModel.base"

/**
 * PokemonV2MovedamageclassnameAggregateModel
 *
 * aggregated selection of "pokemon_v2_movedamageclassname"
 */
export const PokemonV2MovedamageclassnameAggregateModel = PokemonV2MovedamageclassnameAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
