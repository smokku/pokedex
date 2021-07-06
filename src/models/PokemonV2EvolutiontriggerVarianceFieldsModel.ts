import { Instance } from "mobx-state-tree"
import { PokemonV2EvolutiontriggerVarianceFieldsModelBase } from "./PokemonV2EvolutiontriggerVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EvolutiontriggerVarianceFieldsModel */
export interface PokemonV2EvolutiontriggerVarianceFieldsModelType extends Instance<typeof PokemonV2EvolutiontriggerVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EvolutiontriggerVarianceFieldsModel */
export { selectFromPokemonV2EvolutiontriggerVarianceFields, pokemonV2EvolutiontriggerVarianceFieldsModelPrimitives, PokemonV2EvolutiontriggerVarianceFieldsModelSelector } from "./PokemonV2EvolutiontriggerVarianceFieldsModel.base"

/**
 * PokemonV2EvolutiontriggerVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2EvolutiontriggerVarianceFieldsModel = PokemonV2EvolutiontriggerVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
