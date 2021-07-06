import { Instance } from "mobx-state-tree"
import { PokemonV2ItemflingeffecteffecttextSumFieldsModelBase } from "./PokemonV2ItemflingeffecteffecttextSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemflingeffecteffecttextSumFieldsModel */
export interface PokemonV2ItemflingeffecteffecttextSumFieldsModelType extends Instance<typeof PokemonV2ItemflingeffecteffecttextSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemflingeffecteffecttextSumFieldsModel */
export { selectFromPokemonV2ItemflingeffecteffecttextSumFields, pokemonV2ItemflingeffecteffecttextSumFieldsModelPrimitives, PokemonV2ItemflingeffecteffecttextSumFieldsModelSelector } from "./PokemonV2ItemflingeffecteffecttextSumFieldsModel.base"

/**
 * PokemonV2ItemflingeffecteffecttextSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2ItemflingeffecteffecttextSumFieldsModel = PokemonV2ItemflingeffecteffecttextSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
