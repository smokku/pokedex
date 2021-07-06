import { Instance } from "mobx-state-tree"
import { PokemonV2ItemflingeffecteffecttextMinFieldsModelBase } from "./PokemonV2ItemflingeffecteffecttextMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemflingeffecteffecttextMinFieldsModel */
export interface PokemonV2ItemflingeffecteffecttextMinFieldsModelType extends Instance<typeof PokemonV2ItemflingeffecteffecttextMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemflingeffecteffecttextMinFieldsModel */
export { selectFromPokemonV2ItemflingeffecteffecttextMinFields, pokemonV2ItemflingeffecteffecttextMinFieldsModelPrimitives, PokemonV2ItemflingeffecteffecttextMinFieldsModelSelector } from "./PokemonV2ItemflingeffecteffecttextMinFieldsModel.base"

/**
 * PokemonV2ItemflingeffecteffecttextMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2ItemflingeffecteffecttextMinFieldsModel = PokemonV2ItemflingeffecteffecttextMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
