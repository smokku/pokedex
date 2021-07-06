import { Instance } from "mobx-state-tree"
import { PokemonV2ItemeffecttextVarPopFieldsModelBase } from "./PokemonV2ItemeffecttextVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemeffecttextVarPopFieldsModel */
export interface PokemonV2ItemeffecttextVarPopFieldsModelType extends Instance<typeof PokemonV2ItemeffecttextVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemeffecttextVarPopFieldsModel */
export { selectFromPokemonV2ItemeffecttextVarPopFields, pokemonV2ItemeffecttextVarPopFieldsModelPrimitives, PokemonV2ItemeffecttextVarPopFieldsModelSelector } from "./PokemonV2ItemeffecttextVarPopFieldsModel.base"

/**
 * PokemonV2ItemeffecttextVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2ItemeffecttextVarPopFieldsModel = PokemonV2ItemeffecttextVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
