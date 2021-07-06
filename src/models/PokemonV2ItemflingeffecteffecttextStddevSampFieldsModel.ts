import { Instance } from "mobx-state-tree"
import { PokemonV2ItemflingeffecteffecttextStddevSampFieldsModelBase } from "./PokemonV2ItemflingeffecteffecttextStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemflingeffecteffecttextStddevSampFieldsModel */
export interface PokemonV2ItemflingeffecteffecttextStddevSampFieldsModelType extends Instance<typeof PokemonV2ItemflingeffecteffecttextStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemflingeffecteffecttextStddevSampFieldsModel */
export { selectFromPokemonV2ItemflingeffecteffecttextStddevSampFields, pokemonV2ItemflingeffecteffecttextStddevSampFieldsModelPrimitives, PokemonV2ItemflingeffecteffecttextStddevSampFieldsModelSelector } from "./PokemonV2ItemflingeffecteffecttextStddevSampFieldsModel.base"

/**
 * PokemonV2ItemflingeffecteffecttextStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2ItemflingeffecteffecttextStddevSampFieldsModel = PokemonV2ItemflingeffecteffecttextStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
