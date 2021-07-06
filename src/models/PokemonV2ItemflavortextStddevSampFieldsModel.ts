import { Instance } from "mobx-state-tree"
import { PokemonV2ItemflavortextStddevSampFieldsModelBase } from "./PokemonV2ItemflavortextStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemflavortextStddevSampFieldsModel */
export interface PokemonV2ItemflavortextStddevSampFieldsModelType extends Instance<typeof PokemonV2ItemflavortextStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemflavortextStddevSampFieldsModel */
export { selectFromPokemonV2ItemflavortextStddevSampFields, pokemonV2ItemflavortextStddevSampFieldsModelPrimitives, PokemonV2ItemflavortextStddevSampFieldsModelSelector } from "./PokemonV2ItemflavortextStddevSampFieldsModel.base"

/**
 * PokemonV2ItemflavortextStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2ItemflavortextStddevSampFieldsModel = PokemonV2ItemflavortextStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
