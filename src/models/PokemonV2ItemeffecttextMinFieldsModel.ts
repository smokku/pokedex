import { Instance } from "mobx-state-tree"
import { PokemonV2ItemeffecttextMinFieldsModelBase } from "./PokemonV2ItemeffecttextMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemeffecttextMinFieldsModel */
export interface PokemonV2ItemeffecttextMinFieldsModelType extends Instance<typeof PokemonV2ItemeffecttextMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemeffecttextMinFieldsModel */
export { selectFromPokemonV2ItemeffecttextMinFields, pokemonV2ItemeffecttextMinFieldsModelPrimitives, PokemonV2ItemeffecttextMinFieldsModelSelector } from "./PokemonV2ItemeffecttextMinFieldsModel.base"

/**
 * PokemonV2ItemeffecttextMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2ItemeffecttextMinFieldsModel = PokemonV2ItemeffecttextMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
