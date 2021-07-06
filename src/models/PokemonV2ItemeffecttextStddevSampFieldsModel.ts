import { Instance } from "mobx-state-tree"
import { PokemonV2ItemeffecttextStddevSampFieldsModelBase } from "./PokemonV2ItemeffecttextStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemeffecttextStddevSampFieldsModel */
export interface PokemonV2ItemeffecttextStddevSampFieldsModelType extends Instance<typeof PokemonV2ItemeffecttextStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemeffecttextStddevSampFieldsModel */
export { selectFromPokemonV2ItemeffecttextStddevSampFields, pokemonV2ItemeffecttextStddevSampFieldsModelPrimitives, PokemonV2ItemeffecttextStddevSampFieldsModelSelector } from "./PokemonV2ItemeffecttextStddevSampFieldsModel.base"

/**
 * PokemonV2ItemeffecttextStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2ItemeffecttextStddevSampFieldsModel = PokemonV2ItemeffecttextStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
