import { Instance } from "mobx-state-tree"
import { PokemonV2SupercontesteffectflavortextStddevSampFieldsModelBase } from "./PokemonV2SupercontesteffectflavortextStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2SupercontesteffectflavortextStddevSampFieldsModel */
export interface PokemonV2SupercontesteffectflavortextStddevSampFieldsModelType extends Instance<typeof PokemonV2SupercontesteffectflavortextStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2SupercontesteffectflavortextStddevSampFieldsModel */
export { selectFromPokemonV2SupercontesteffectflavortextStddevSampFields, pokemonV2SupercontesteffectflavortextStddevSampFieldsModelPrimitives, PokemonV2SupercontesteffectflavortextStddevSampFieldsModelSelector } from "./PokemonV2SupercontesteffectflavortextStddevSampFieldsModel.base"

/**
 * PokemonV2SupercontesteffectflavortextStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2SupercontesteffectflavortextStddevSampFieldsModel = PokemonV2SupercontesteffectflavortextStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
