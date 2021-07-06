import { Instance } from "mobx-state-tree"
import { PokemonV2EvolutiontriggerMaxFieldsModelBase } from "./PokemonV2EvolutiontriggerMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EvolutiontriggerMaxFieldsModel */
export interface PokemonV2EvolutiontriggerMaxFieldsModelType extends Instance<typeof PokemonV2EvolutiontriggerMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EvolutiontriggerMaxFieldsModel */
export { selectFromPokemonV2EvolutiontriggerMaxFields, pokemonV2EvolutiontriggerMaxFieldsModelPrimitives, PokemonV2EvolutiontriggerMaxFieldsModelSelector } from "./PokemonV2EvolutiontriggerMaxFieldsModel.base"

/**
 * PokemonV2EvolutiontriggerMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2EvolutiontriggerMaxFieldsModel = PokemonV2EvolutiontriggerMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
