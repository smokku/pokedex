import { Instance } from "mobx-state-tree"
import { PokemonV2EvolutiontriggerModelBase } from "./PokemonV2EvolutiontriggerModel.base"

/* The TypeScript type of an instance of PokemonV2EvolutiontriggerModel */
export interface PokemonV2EvolutiontriggerModelType extends Instance<typeof PokemonV2EvolutiontriggerModel.Type> {}

/* A graphql query fragment builders for PokemonV2EvolutiontriggerModel */
export { selectFromPokemonV2Evolutiontrigger, pokemonV2EvolutiontriggerModelPrimitives, PokemonV2EvolutiontriggerModelSelector } from "./PokemonV2EvolutiontriggerModel.base"

/**
 * PokemonV2EvolutiontriggerModel
 *
 * columns and relationships of "pokemon_v2_evolutiontrigger"
 */
export const PokemonV2EvolutiontriggerModel = PokemonV2EvolutiontriggerModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
