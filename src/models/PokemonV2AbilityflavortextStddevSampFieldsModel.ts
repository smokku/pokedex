import { Instance } from "mobx-state-tree"
import { PokemonV2AbilityflavortextStddevSampFieldsModelBase } from "./PokemonV2AbilityflavortextStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilityflavortextStddevSampFieldsModel */
export interface PokemonV2AbilityflavortextStddevSampFieldsModelType extends Instance<typeof PokemonV2AbilityflavortextStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilityflavortextStddevSampFieldsModel */
export { selectFromPokemonV2AbilityflavortextStddevSampFields, pokemonV2AbilityflavortextStddevSampFieldsModelPrimitives, PokemonV2AbilityflavortextStddevSampFieldsModelSelector } from "./PokemonV2AbilityflavortextStddevSampFieldsModel.base"

/**
 * PokemonV2AbilityflavortextStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2AbilityflavortextStddevSampFieldsModel = PokemonV2AbilityflavortextStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
